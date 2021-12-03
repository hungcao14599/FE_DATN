export default function userIDHeader() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.user) {
        return user.user.id;
    } else {
        return {};
    }
}