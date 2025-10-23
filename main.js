import "./scss/style.scss";
import "./public/jquery"
import "./public/dropdown"

const MOCK_DATA = {
    os: [{ name: "win", version: "10", text: "Windows 10", icon: "/images/os-icons/windows-10.png", selected: true }],
    browsers: [{ text: "Chrome", icon: "/images/browser-icons/chrome.png" }],
    browserVersions: [123]
}

const osDropdown = new Dropdown({
    width: 960,
    height: 45,
    iconWidth: 20,
    iconHeight: 20,
    data: MOCK_DATA.os
});

const browserDropdown = new Dropdown({
    width: 960,
    height: 45,
    iconWidth: 20,
    iconHeight: 20,
    data: MOCK_DATA.browsers
})

const versionsDropdown = new Dropdown({
    width: 960,
    height: 45,
    iconWidth: 20,
    center: true,
    iconHeight: 20,
    data: MOCK_DATA.browserVersions
})


$(".os__dropdown").append(osDropdown.create());
$(".browser__dropdown").append(browserDropdown.create());
$(".browser__versions__dropdown").append(versionsDropdown.create());

