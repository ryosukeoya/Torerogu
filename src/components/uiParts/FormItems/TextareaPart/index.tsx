import type { VFC, ComponentProps } from 'react';
import { textareaStyle } from './style';
import Container from '../FormItemContainer';

type TextareaProps = ComponentProps<'textarea'>;

interface Props extends TextareaProps {
  title: string;
}

const TextareaPart: VFC<Props> = ({ title, ...props }) => {
  return (
    <Container title={title}>
      <textarea {...props} css={textareaStyle()} />
    </Container>
  );
};

export default TextareaPart;
