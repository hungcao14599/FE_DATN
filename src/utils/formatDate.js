export const formatDate = (time) => {
    const date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " "));
    const diff = (new Date().getTime() - date.getTime()) / 1000;
    const dayDiff = Math.floor(diff / 86400);
    return (
        (dayDiff === 0 &&
            ((diff < 60 && "nows") ||
                (diff < 3600 && `${Math.floor(diff / 60)} minutes ago`) ||
                (diff < 7200 && "1 hours ago") ||
                (diff < 86400 && `${Math.floor(diff / 3600)} hours ago`))) ||
        (dayDiff === 1 && "yesterday") ||
        (dayDiff < 7 && `${dayDiff} days ago`) ||
        (dayDiff < 31 && `${Math.ceil(dayDiff / 7)} weeks ago`) ||
        (dayDiff <= 366 && `${Math.ceil(dayDiff / 31)} months ago`) ||
        (dayDiff > 366 && `${Math.ceil(dayDiff / 366) - 1} years ago`)
    );
};