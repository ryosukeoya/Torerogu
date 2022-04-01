import { SerializedStyles } from '@emotion/react';
import type { VFC, Dispatch, SetStateAction, ComponentProps } from 'react';
import { inputPartStyle, submitStyle } from './style';
import { useRipple } from '~/hooks';
import { rippleButton } from '~/styles/share/likeButtons';
import { ripple } from '~/styles/share/ripple';
import { css } from '@emotion/react';
import FormItemContainer from '../FormItemContainer';
import { useFormContext } from 'react-hook-form';

type Input = ComponentProps<'input'>;

interface InputPartProps extends Input {
  title?: string;
  customCss?: SerializedStyles;
  setState?: Dispatch<SetStateAction<unknown>>;
  unit?: string;
  formConf?: { name: string; option: Record<string, unknown> };
}

const InputPart: VFC<InputPartProps> = ({ title, customCss, setState, unit, formConf, ...props }) => {
  const [coords, setCoords, isRippling] = useRipple(300);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  switch (props.type) {
    case 'submit':
      return (
        <FormItemContainer>
          <div
            css={rippleButton(5,true,css`padding: 0;`,css`margin-left:0;margin-right:0;`)} // prettier-ignore
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
          >
            <span css={inputPartStyle.inputTitle}>記録する</span>
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
        </FormItemContainer>
      );
    default:
      return (
        <FormItemContainer title={title} unit={unit} formConf={formConf} errors={errors}>
          <input {...(formConf && { ...register(formConf.name, formConf.option) })} {...props} onChange={(e) => setState && setState(e.target.value)} css={inputPartStyle.input(customCss)} />
        </FormItemContainer>
      );
  }
};

export default InputPart;
