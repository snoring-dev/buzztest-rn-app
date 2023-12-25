import { sleep } from "../../Utils";
import request from "../../Utils/Http";

const extraData = [
  {
    cover:
      "https://res.cloudinary.com/deemy0vbo/image/upload/v1673512743/nature-moi-fond_hlzoae.webp",
    id: 275,
    name: "Nature et Moi",
    dateCreation: "2022-04-28T00:53:34+00:00",
    type: 1,
    description:
      "Sed sollicitudin accumsan velit, finibus rhoncus nisi fringilla nec. Donec mauris lectus, rutrum id dapibus sit amet, facilisis a tellus. Curabitur nec lacus venenatis.",
    preview: null,
  },
  {
    cover:
      "https://res.cloudinary.com/deemy0vbo/image/upload/v1673512739/03af076190c24ce01d9968ff14306c8d_kue1yv.png",
    id: 103,
    name: "Sephora - clean face mask",
    dateCreation: "2022-04-14T09:30:31+00:00",
    type: 1,
    description:
      "Vestibulum tristique et mi vel efficitur. Proin pretium tortor quis erat viverra, mollis tempus sem aliquam. Vivamus quis tincidunt turpis. Integer scelerisque libero eu risus porta pellentesque et nec ligula.",
    preview: null,
  },
];

export const getAllBrands = async () => {
  const covers = [
    "https://res.cloudinary.com/deemy0vbo/image/upload/v1673513528/IMG_0520_pjukj4.jpg",
    "https://res.cloudinary.com/deemy0vbo/image/upload/v1673513557/002-thumbnail_bisjsi.jpg",
  ];
  await sleep(3000);
  const resp = await request({
    url: "/report_brands",
    method: "GET",
  });
  return [...resp, ...extraData].map((d) => {
    if (d.id === 275 || d.id === 103) return d;
    return { ...d, cover: covers.shift() };
  });
};

export const getCompainDetails = async (id: number) => {
  const resp = await request({
    url: `/report_brands/${id}`,
    method: "GET",
  });
  return resp;
};
