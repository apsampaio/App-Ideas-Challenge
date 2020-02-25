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
  $(".shape").css(
    "border-radius",
    `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`
  );
  $(".code-output").text(
    `border-radius: ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%;`
  );
});
