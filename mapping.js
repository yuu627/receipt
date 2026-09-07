/*
 * バーコード ⇔ 写真 対応表
 * ------------------------------------------------------------
 * ここに「バーコードの値」と「対応する写真ファイル」の一覧を書きます。
 * 実際の写真が届いたら、この一覧を書き換えるだけで反映されます。
 *
 * 書き方（1枚だけの場合）:
 *   {
 *     barcode: "スキャンされる文字列（バーコードに埋め込まれている値）",
 *     photo:   "photos/フォルダの中の画像ファイル名",
 *     label:   "レシートに印字する商品名・タイトルなど（任意）"
 *   },
 *
 * 書き方（複数枚を1つのバーコードに対応させる場合）:
 *   {
 *     barcode: "スキャンされる文字列",
 *     photos: ["photos/a.jpg", "photos/b.jpg", "photos/c.jpg"],
 *     label:   "レシートに印字する商品名・タイトルなど（任意）"
 *   },
 *
 * ・barcode は完全一致で照合します（前後の空白は自動で無視されます）。
 * ・photo / photos は index.html から見た相対パスです。photos フォルダに画像を入れてください。
 * ・label は空文字 "" でも構いません。
 * ・1枚のときは photo、複数枚のときは photos（配列）を使います。両方書いた場合は photos が優先されます。
 *
 * 下のサンプルは、1枚のものと複数枚のものを両方収録しています。実際の一覧に差し替えてください。
 * サンプルのバーコードは「テスト用バーコード作成」タブでそのまま表示・印刷してテストできます。
 */

window.BARCODE_MAP = [
  {
    barcode: "SAMPLE-0001",
    photo: "photos/sample_001.jpg",
    label: "サンプル商品A"
  },
  {
    barcode: "SAMPLE-0002",
    photos: ["photos/sample_002.jpg", "photos/sample_003.jpg"],
    label: "サンプル商品B（複数枚の例）"
  },
  {
    barcode: "SAMPLE-0003",
    photo: "photos/sample_003.jpg",
    label: "サンプル商品C"
  },
  {
    barcode: "00001",
    photo: "photos/Let_it_fade.png",
    label: "Let it fade."
  },
  {
    barcode: "00002",
    photo: "photos/Can_you_see_me.png",
    label: "Can you see me?"
  },
  {
    barcode: "00003",
    photo: "photos/Is_this_what_peace _feels_like.png",
    label: "Is this what peace feels like?"
  },
  {
    barcode: "00004",
    photo: "photos/Salvation_or_ruin.png",
    label: "Salvation or ruin."
  },
  {
    barcode: "00005",
    photo: "photos/Let's_get_out_of here.png",
    label: "Let's get out of here."
  },
  {
    barcode: "00006",
    photo: "photos/It's_over.png",
    label: "It's over."
  },
  {
    barcode: "00007",
    photo: "photos/Doll.png",
    label: "Doll"
  },
  {
    barcode: "00008",
    photo: "photos/Frill.png",
    label: "Frill"
  },
  {
    barcode: "00009",
    photo: "photos/¥300.png",
    label: "¥300"
  },
  {
    barcode: "00010",
    photo: "photos/swan.png",
    label: "swan"
  },
  {
    barcode: "00011",
    photo: "photos/Goldfish.png",
    label: "Goldfish"
  },
  {
    barcode: "00012",
    photo: "photos/Mellow.png",
    label: "Mellow"
  },
  {
    barcode: "00013",
    photo: "photos/Fizzy.png",
    label: "Fizzy"
  },
  {
    barcode: "00014",
    photo: "photos/Melon_Soda_Float.png",
    label: "Melon Soda Float"
  },
  {
    barcode: "00015",
    photo: "photos/Flower.png",
    label: "Flower"
  },
  {
    barcode: "00016",
    photo: "photos/Pigeon.png",
    label: "Pigeon"
  },
  {
    barcode: "00017",
    photo: "photos/Chinatown.png",
    label: "Chinatown"
  },
  {
    barcode: "00018",
    photo: "photos/The_way_home.png",
    label: "The way home"
  },
  {
    barcode: "00019",
    photo: "photos/star.png",
    label: "star"
  },
  {
    barcode: "00020",
    photo: "photos/A_little_breather.png",
    label: "A little breather"
  },
  {
    barcode: "00021",
    photo: "photos/Night.png",
    label: "Night"
  },
  {
    barcode: "00022",
    photo: "photos/cake.png",
    label: "cake"
  },
  {
    barcode: "00023",
    photo: "photos/Berries.png",
    label: "Berries"
  },
  {
    barcode: "00024",
    photo: "photos/Parfait.png",
    label: "Parfait"
  },
  {
    barcode: "00025",
    photo: "photos/Glass_jar.png",
    label: "Glass jar"
  },
  {
    barcode: "00026",
    photo: "photos/strawberry.png",
    label: "strawberry"
  },
  {
    barcode: "00027",
    photo: "photos/Little_stars.png",
    label: "Littlestars"
  },
  {
    barcode: "00028",
    photo: "photos/Innards.png",
    label: "Innards"
  },
  {
    barcode: "00029",
    photo: "photos/one_drink.png",
    label: "one drink"
  },
  {
    barcode: "00030",
    photo: "photos/white.png",
    label: "white.png"
  },
   {
    barcode: "00031",
    photo: "photos/marshmallow.png",
    label: "marshmallow"
  },
   {
    barcode: "00032",
    photo: "photos/Angel.png",
    label: "Angel"
  },
];
