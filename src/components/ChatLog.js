import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  return (
    <div className="chatLog">
      {props.entries.map((entry) => {
        return (
          <ChatEntry
            key={entry.id}
            {...entry}
            liked={entry.liked}
            likeHandler={props.onClick}
            // without this line 15, all tests will pass.
            isLocal={entry.sender === props.uniqueSenders[0] ? true : false}
          />
        );
      })}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ).isRequired,
};
export default ChatLog;
