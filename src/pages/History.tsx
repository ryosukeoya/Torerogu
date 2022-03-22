import React from 'react';
import { RippleButton, PrimaryButton, InputPart, Card } from '../components/entryPoint';
import { textareaStyle } from '../components/uiParts/InputPart/style';

const History = () => {
  return (
    <>
      <p>history page</p>
      <RippleButton
        onClick={() => {
          null;
        }}
      >
        Click me
      </RippleButton>
      <PrimaryButton type={'isButton'} text={'buttonSample'} theme={'simple'} />
      <InputPart type={'isTextArea'} title={'sample'} css={textareaStyle()} placeholder='テキストを入力してください' cols={30} rows={10} />
      <Card>hoge</Card>
      <select name='pets' id='pet-select'>
        <option value=''>--Please choose an option--</option>
        <option value='dog'>Dog</option>
        <option value='cat'>Cat</option>
        <option value='hamster'>Hamster</option>
        <option value='parrot'>Parrot</option>
        <option value='spider'>Spider</option>
        <option value='goldfish'>Goldfish</option>
      </select>
    </>
  );
};

export default History;
