# icons

# 01 cart
<span class="material-icons">
shopping_cart
</span>

# 02 member
<span class="material-icons">
person
</span>

# 03 more
<span class="material-icons">
arrow_right
</span>

# 04 male
<span class="material-icons">
male
</span>

# 05 female
<span class="material-icons">
female
</span>

# 06 menu
<span class="material-icons">
menu
</span>

# 07 left
<span class="material-icons">
chevron_left
</span>

# 08 right
<span class="material-icons">
chevron_right
</span>

# 09 favorite
<span class="material-icons">
favorite_border
</span>

# 10 chat   <!-- 第10號找不到，先用這個擋一下 -->
<span class="material-icons p-4 icons"> chat 
</span>

# 數字直接等於間距的數值，目前已經有套用專題會用到的間距數字，如果有不足的可以再自己於variables.scss修改。

# variables.scss的內容是足的，這裡僅列示
# spacing
  0: 0,                 <!-- 間距0 -->
  4: $spacer * 0.25,    <!-- 間距4 -->
  6: $spacer * 0.375,   <!-- 間距6 -->
  8: $spacer * 0.5,     <!-- 間距8 -->
  24: $spacer * 1.5,    <!-- 間距24 -->
  120: $spacer * 7.5,   <!-- 間距120 -->
  124: $spacer * 7.75,  <!-- 間距124 -->
  140: $spacer * 8.75,  <!-- 間距140 -->
  220: $spacer * 13.75, <!-- 間距220 -->
  240: $spacer * 15,    <!-- 間距240 -->
# font-sizing
  48: $font-size-base * 3,     <!-- 間距48 -->
  40: $font-size-base * 2.5,   <!-- 間距40 -->
  32: $font-size-base * 2,     <!-- 間距32 -->

# color
## 以main取代primary文字
## 以小駝峰式命名

  主色：main
  主色深：mainDark
  主色淺：mainLight
  主色透明：mainTransparent

  次主色：secondary
  次主色深：secondaryDark
  次主色淺：secondaryLight

  配色橘：orange
  配色膚色：skin
  配色藍：blueLight

  灰：深到淺 → 1 ~ 6   <!-- 這是依照設計師的顏色來排 -->
  gray1
  gray2
  gray3
  gray4
  gray5
  gray6
  
 <!-- 細節可以比對設計稿跟variables.scss文件 -->
 
  Example:
  bg-mainDark , text-grayDark, border-orange


------

# 版面

    <%- include('./layout/nav') -%>          NavBar
    <%- include('./layout/banner') -%>       Banner
    <%- include('./layout/main') -%>         主要內容 - 開始約會卡片系列
    <%- include('./layout/comment') -%>      服務好評
    <%- include('./layout/hire') -%>         陪玩師招募
    <%- include('./layout/playComment') -%>  陪玩師留言
    <%- include('./layout/footer') -%>       Footer

# 分配 一個人分配二個 組員優先選 剩下的我再做

A． nav與footer是一組
B． banner
C． 主要內容
D． 服務好評
E． 陪玩師招募
F． 陪玩師留言

# 設計稿

https://www.figma.com/file/opr4v1VDYyRm6YxWwQ5DmH/%F0%9F%A7%AD-%E5%85%AD%E8%A7%92-%7C-%E6%84%9B%E6%83%85%E9%9B%BB%E5%95%86_%E6%84%9B%E9%85%8D?type=design&node-id=35-2135&mode=design&t=MpgDfxAItfn4JWbH-0

主要內容卡片，照片下方上層有一個陰影遮罩，用來顯示名稱與姓別的文字，我已經都合併到images裡面了，所以直接套圖就好，不用額外做陰影（做了會想死）