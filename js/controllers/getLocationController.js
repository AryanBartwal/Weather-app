import { errorMessages } from "../config.js";

export function clearErrorMessages() {
	if (errorMessages) errorMessages.innerHTML = "";
}

import { createErrorMessage } from "../utils.js";

export function getUserLocation() {
	return new Promise((resolve, reject) => {
		if (!navigator.geolocation) {
			console.log("Geolocation is not supported by this browser.");
			return;
		}

		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				clearErrorMessages();
				resolve(coords);
			},
			(error) => {
				// Don't show any error message if user denies location, just resolve with null
				resolve(null);
			}
		);
	});
}
