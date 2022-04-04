import type { VFC, Dispatch, SetStateAction, ComponentProps } from 'react';
import { useRipple } from '~/hooks';
import { rippleButton } from '~/styles/share/likeButtons';
import { ripple } from '~/styles/share/ripple';
import { css, SerializedStyles } from '@emotion/react';
import FormFieldWrapper from './FormFieldWrapper';
import { useFormContext } from 'react-hook-form';
import { COLOR } from '~/styles/const';

type Input = ComponentProps<'input'>;

interface Props extends Input {
  title?: string;
  customCss?: SerializedStyles;
  setState?: Dispatch<SetStateAction<unknown>>;
  unit?: string;
  formConf?: { name: string; option: Record<string, unknown> };
}

const InputField: VFC<Props> = ({ title, customCss, setState, unit, formConf, ...props }) => {
  const [coords, setCoords, isRippling] = useRipple(300);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  switch (props.type) {
    case 'submit':
      return (
        <FormFieldWrapper>
          <div
            css={rippleButton(5,true,css`padding: 0;`,css`margin-left:0;margin-right:0;`)} // prettier-ignore
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
          >
            <span css={inputFieldStyle.inputTitle}>記録する</span>
            <input {...props} css={[submitStyle, customCss]} />
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
          <input {...props} {...(formConf && { ...register(formConf.name, formConf.option) })} onChange={(e) => setState && setState(e.target.value)} css={inputFieldStyle.input(customCss)} />
        </FormFieldWrapper>
      );
  }
};

export default InputField;

const inputFieldStyle = {
  input: (customCss?: SerializedStyles) => css`
    width: 200px;
    border: 1px solid ${COLOR.BORDER_GRAY};
    background-color: #fff;
    border-radius: 5px;
    text-align: right;
    padding: 4px 10px;
    color:black
    &::placeholder {
    }
    &:focus {
      border: 1.5px solid rgba(255,153,0,0.7)};
    }
    ${customCss}
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
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 13px 0;
  border: 0;
  border-radius: 22px;
  cursor: pointer;
`;
