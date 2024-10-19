import React, { useContext } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import MessageContext from "../../contexts/MessageContext";
import ThemeContext from "../../contexts/ThemeContext";

const MessageToast = () => {
	const { message, handleChangeMessage } = useContext(MessageContext);
	const { theme } = useContext(ThemeContext);

	const handleChangeClose = () => {
		//setShow(false);
		handleChangeMessage("", "", "", false);
	};

	return (
		<div>
			<ToastContainer position="top-end" className="p-3">
				<Toast
					bg={theme.toLowerCase()}
					onClose={handleChangeClose}
					show={message.onVisible}
					autohide
				>
					<Toast.Header>
						<strong className="me-auto">{message.title}</strong>
						<small className="text-muted">{message.hour}</small>
					</Toast.Header>
					<Toast.Body>{message.messageBody}</Toast.Body>
				</Toast>
			</ToastContainer>
		</div>
	);
};

export default MessageToast;
