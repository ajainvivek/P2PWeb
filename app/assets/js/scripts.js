/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2016. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    var url = "https://github.com/ajainvivek/P2PWeb/raw/master/app/assets/packages/";
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    else if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
    else if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    else if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

    if (OSName === "Windows" || OSName === "Unknown OS") {
      $(".js-download-button").attr("href", url + "p2pdrop-win32-x64.zip");
      $(".js-download-button.btn-2").show();
      $(".js-download-button.btn-2").attr("href", url + "p2pdrop-win32-ia32.zip");
      $(".os").text(OSName + " (64bit)");
      $(".os2").text(OSName + " (32bit)");
    } else if (OSName === "MacOS") {
      $(".js-download-button").attr("href", url + "p2pdrop-darwin-x64.zip");
      $(".support").text("For OSX 10.8 or later.");
      $(".os").text(OSName);
    } else {
      $(".js-download-button").attr("href", url + "p2pdrop-linux-x64.zip");
      $(".js-download-button.btn-2").show();
      $(".js-download-button.btn-2").attr("href", url + "p2pdrop-linux-ia32.zip");
      $(".os").text(OSName + " (64bit)");
      $(".os2").text(OSName + " (32bit)");
    }

  });

})(jQuery, window, document);
