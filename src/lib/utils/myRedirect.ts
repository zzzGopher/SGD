export default function myRedirect(time: number): void {
	setTimeout(() => (window.location.href = '/contact'), time);
}
