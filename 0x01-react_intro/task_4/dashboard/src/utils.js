export function getFullYear() {
	return new Date().getFullYear();
}

export function getFooterCopy(IsIndex) {
	if (IsIndex) {
		return 'Holberton school';
	}
	return 'Holberton School main dashboard';
}
export function getLatestNotification() {
	return '<strong>Urgent requirement</strong> - complete by EOD';
}
