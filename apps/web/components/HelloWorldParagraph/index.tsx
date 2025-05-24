import { withHelloWorld } from "@iamhoonse-dev/react-utils/hocs";

const MessageContainer = ({
  title,
  message,
}: {
  title: string;
  message: string;
}) => (
  <>
    <span>{title}</span>
    {message}
  </>
);

const HelloWorldParagraph = withHelloWorld(MessageContainer);
export default HelloWorldParagraph;
