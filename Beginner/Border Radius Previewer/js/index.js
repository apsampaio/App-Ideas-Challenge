let complexActive = false;
$(".complex-holder").hide();

$(".all-borders").on("input change", () => {
  const range = $(".all-borders").val();
  $(".shape").css("border-radius", range + "%");
  $(".code-output").text(`border-radius: ${range}%;`);
  $(".all-value").text(range + "%");
});

$(".bord").on("input change", () => {
  const topLeft = $(".top-left").val();
  const topRight = $(".top-right").val();
  const bottomLeft = $(".bottom-left").val();
  const bottomRight = $(".bottom-right").val();

  $(".tl-value").text(topLeft + "%");
  $(".tr-value").text(topRight + "%");
  $(".bl-value").text(bottomLeft + "%");
  $(".br-value").text(bottomRight + "%");
  if (complexActive) {
    const cTopLeft = $(".c-top-left").val();
    const cTopRight = $(".c-top-right").val();
    const cBottomLeft = $(".c-bottom-left").val();
    const cBottomRight = $(".c-bottom-right").val();

    $(".c-tl-value").text(cTopLeft + "%");
    $(".c-tr-value").text(cTopRight + "%");
    $(".c-bl-value").text(cBottomLeft + "%");
    $(".c-br-value").text(cBottomRight + "%");

    $(".shape").css(
      "border-radius",
      `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}% / ${cTopLeft}% ${cTopRight}% ${cBottomRight}% ${cBottomLeft}%`
    );

    $(".code-output").text(
      `border-radius: ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}% / ${cTopLeft}% ${cTopRight}% ${cBottomRight}% ${cBottomLeft}%;`
    );
  } else {
    $(".shape").css(
      "border-radius",
      `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`
    );

    $(".code-output").text(
      `border-radius: ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}% `
    );
  }
});

$(".copy").on("click", () => {
  $("#output").select();
  document.execCommand("copy");
});

$(".complex").on("click", () => {
  $(".complex-holder").toggle();
  complexActive = !complexActive;
});
