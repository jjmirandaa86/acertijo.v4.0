import React, { useState, useEffect } from "react";

const HookChristmas = () => {
	const nowDate = new Date();
	const nowYear = nowDate.getFullYear();
	const startChristmas = new Date(`${nowYear}-12-01`);
	const endChristmas = new Date(`${nowYear + 1}-01-06`);

	const [isChristmas, setIsChristmas] = useState(false);

	const validateChristmas = (start, end, now) => {
		if (now.getTime() >= start.getTime() && now.getTime() <= end.getTime()) {
			return true;
		} else {
			return false;
		}
	};

	return {
		isChristmas,
		setIsChristmas,
		validateChristmas,
		nowDate,
		startChristmas,
		endChristmas,
	};
};

export default HookChristmas;
