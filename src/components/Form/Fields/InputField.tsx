import type { VFC, ComponentProps } from 'react';
import { useRipple } from '~/hooks';
import { rippleWrapper, media } from '~/styles/shares';
import { ripple } from '~/styles/shares/ripple';
import { css, SerializedStyles } from '@emotion/react';
import { FormFieldWrapper } from './FormFieldWrapper';
import { useFormContext } from 'react-hook-form';
import { COLOR, BREAKPOINT, FONT, FORM } from '~/styles/const';
import type { FormItemConf } from '../formTypes';

type InputProps = ComponentProps<'input'>;

interface Props extends InputProps {
  title?: string;
  customCss?: SerializedStyles;
  unit?: string;
  formConf?: FormItemConf;
}

export const InputField: VFC<Props> = ({ title, customCss, unit, formConf, ...inputProps }) => {
  const [coords, setCoords, isRippling] = useRipple(300);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  switch (inputProps.type) {
    case 'submit':
      return (
        <FormFieldWrapper>
          <div
            css={[
              rippleWrapper(5, true),
              css`
                padding: 0;
                @media (min-width: ${BREAKPOINT.MD}px) {
                  margin-left: 0;
                  margin-right: 0;
                }
              `,
            ]}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
          >
            <span css={inputFieldStyle.inputTitle}>記録する</span>
            <input {...inputProps} css={[submitStyle, customCss]} />
            {isRippling ? (
              <span
                css={ripple.ripple('#ffbb54')}
                style={{
                  left: coords.x,
                  top: coords.y,
                }}
              />
            ) : (
              ''
            )}
          </div>
        </FormFieldWrapper>
      );
    default:
      return (
        <FormFieldWrapper title={title} unit={unit} formConf={formConf} errors={errors}>
          <input {...inputProps} {...(formConf && { ...register(formConf.name, formConf.options) })} css={[inputFieldStyle.input, customCss]} />
        </FormFieldWrapper>
      );
  }
};

const inputFieldStyle = {
  input: css`
    width: 200px;
    border: 1px solid ${COLOR.BORDER_GRAY};
    background-color: #fff;
    border-radius: 5px;
    text-align: right;
    padding: 0 10px;
    height: ${FORM.INPUT_AND_SELECT.HEIGHT};
    color: black;
    font-size: ${FONT.BASE};
    &:focus {
      border: 1.5px solid rgba(255, 153, 0, 0.7);
    }
    &::placeholder {
      color: black;
    }
    ${media.pc(
      css`
        height: auto;
        padding: 4px 10px;
      `,
    )}
  `,
  inputTitle: css`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin: auto;
    z-index: 1000;

    pointer-events: none;
  `,
};

const submitStyle = () => css`
  display: block;
  overflow: hidden !important;
  width: 100%;
  height: 100%;
  padding: 13px 0;
  border: 0;
  border-radius: 22px;
  cursor: pointer;
`;
