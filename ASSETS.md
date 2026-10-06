# 素材紀錄

本專案的三張圖片於 2026-10-06 使用 **imagegen skill／內建 image_gen 工具**生成，屬於替代示範素材，沒有使用 CLI fallback 或 Wix 原素材。生成後已檢視圖片，並將最終檔案複製到本專案。

| 本地檔案 | 用途 | 尺寸 |
| --- | --- | --- |
| `src/assets/mountains.png` | 主視覺、技能、作品／經歷與聯絡區背景，透過 CSS overlay／crop 調整呈現 | 1536 × 1024 |
| `src/assets/project-01.png` | PROJECT 01 耳機示範作品圖 | 1254 × 1254 |
| `src/assets/project-02.png` | PROJECT 02 建築示範作品圖 | 1254 × 1254 |

實際 PNG 尺寸以檔案 metadata 為準；作品圖片以 CSS object-fit 裁切呈現。

R 標記、favicon 與社群圖示為本地 SVG 程式碼。Montserrat／Open Sans 透過 Google Fonts 外部樣式表載入，無法取得時使用系統字型。

## mountains.png 的完整 prompt

```text
Use case: photorealistic-natural. Asset type: local background photo for a UX designer portfolio homepage. Primary request: quiet wide editorial landscape of misty rugged mountain ridges and a dark conifer forest beneath an overcast sky. Composition: 3:2 landscape, large soft grey atmospheric sky and fog in the upper two thirds to support large white homepage type, detailed mountains low and at the edges, no dominant peak in the central text area. Medium: sophisticated black and white photography, cool slate grey, subtle film grain, diffused soft light, restrained contrast. No text, no logos, no people, no buildings, no watermark. Return one image.
```

## project-01.png 的完整 prompt

```text
Use case: product-mockup. Asset type: portfolio project thumbnail. Primary request: refined editorial product photograph of a black over-ear wireless headphone on a muted light-grey studio surface, abstract soft shadow, one product with a minimal circular shape and matte finish. Composition: square photograph, headphones slightly angled at center, generous clean space, high-end industrial design portfolio presentation. Palette: monochrome greys and black, very subtle warm paper texture. Soft window light from top left. No brand or text or logos or watermarks. Return one image.
```

## project-02.png 的完整 prompt

```text
Use case: photorealistic-natural. Asset type: portfolio project thumbnail. Primary request: minimal modern concrete art museum facade, sculptural intersecting clean planes with one inset dark doorway, a small olive tree, architectural photography. Composition: square, white concrete angles across frame, geometric negative space, diffused natural light. Palette: off-white light grey concrete, dark charcoal shadows and a little subdued green foliage. Restrained contemporary designer portfolio aesthetic. No people, no text, no logo, no watermark. Return one image.
```
