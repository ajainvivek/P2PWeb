/*!
 * P2PDrop
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    var url = "https://www.dropbox.com/";
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    else if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
    else if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    else if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

    if (OSName === "Windows" || OSName === "Unknown OS") {
      $(".js-download-button").attr("href", url + "s/jcdmn2guv4r8h6g/P2PDrop-win32-x64.zip?dl=0");
      $(".js-download-button.btn-2").css("display", "block");
      $(".js-download-button.btn-2").attr("href", url + "s/ku6bygm01tgfvv0/P2PDrop-win32-ia32.zip?dl=0");
      $(".support").text("For Window 7 or later.");
      $(".os").text(OSName + " (64bit)");
      $(".os2").text(OSName + " (32bit)");
    } else if (OSName === "MacOS") {
      $(".js-download-button").attr("href", url + "s/e2bytxioyxwfaf8/P2PDrop-darwin-x64.zip?dl=0");
      $(".support").text("For OSX 10.8 or later.");
      $(".os").text(OSName);
    } else {
      $(".js-download-button").attr("href", url + "s/16rv2z03d7e977z/P2PDrop-linux-x64.zip?dl=0");
      $(".js-download-button.btn-2").css("display", "block");
      $(".js-download-button.btn-2").attr("href", url + "s/18htpnggth8c2c8/P2PDrop-linux-ia32.zip?dl=0");
      $(".os").text(OSName + " (64bit)");
      $(".os2").text(OSName + " (32bit)");
    }

  });

})(jQuery, window, document);
