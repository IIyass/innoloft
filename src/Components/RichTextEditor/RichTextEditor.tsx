import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface IRichTextEditor {
  content: string;
  handleContentChange: (value: string) => void;
}

const RichTextEditor = (props: IRichTextEditor) => {
  const [content, setContent] = useState<string>('');

  const handleContentChange = (value: React.SetStateAction<string>) => {
    setContent(value);
    props.handleContentChange(value.toString());
  };

  useEffect(() => {
    setContent(props.content);
  }, [props]);

  return (
    <div className="w-full mt-4 px-6">
      <ReactQuill value={content} onChange={handleContentChange} />
    </div>
  );
};

export default RichTextEditor;
