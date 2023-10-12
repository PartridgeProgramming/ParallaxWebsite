const toggleNav = () => {
    document.getElementById("main-menu").classList.remove("hidden");
}

windows.onload = () => {
    document.getElementById("burger-menu").onclick = toggleNav;
};