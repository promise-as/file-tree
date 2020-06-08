$(document).ready(function () {
  $(".close_menu").each(function () {
      $(this).siblings("ul").hide();
  });
  $(".ontree").each(function () {
      $(this).parents("ul").show();
      $(this).parents("ul").siblings().addClass("open_menu").removeClass("close_menu");
  });
  $(document).on("click", ".close_menu span", function () {
      $(this).parent().addClass("open_menu").removeClass("close_menu");
      $(this).parent().siblings("ul").fadeIn();
      treewidth();
  });
  $(document).on("click", ".open_menu span", function () {
      $(this).parent().parent().find(".open_menu").addClass("close_menu").removeClass("open_menu");
      $(this).parent().parent().find("ul").hide();
      treewidth();
  });
  $(document).on("click", ".tree a", function () {
      $(".ontree").removeClass("ontree");
      $(this).addClass("ontree");
  });
  treewidth();

  function treewidth() {
      var items = new Array;
      var parents = new Array;
      var text_num = 0,
          parent_num = 0;
      $(".tree a").each(function () {
          if ($(this).is(":hidden") == false) {
              items.push($(this).text().length);
              parents.push($(this).parents("ul").length);
          }
      });
      //document.title="最多字数："+Math.max.apply(null, items)+",最大层数："+Math.max.apply(null, parents);
      text_num = Math.max.apply(null, items);
      parent_num = Math.max.apply(null, parents);
      $(".tree").width(parent_num * 20 + text_num * 14 + 44);
  }
});