

function DeleteSessionCookie(cookieName) {
        document.cookie = `${cookieName}=; Max-Age=-99999999;`;
}

export default DeleteSessionCookie;