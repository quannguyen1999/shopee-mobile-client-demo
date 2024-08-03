import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import { BG_GRAY_400 } from "./colors";
import NotificationItem from "@/components/notification/NotificationItem";
import Transaction from "@/components/notification/NotificationTransaction";
import { Divider } from "@gluestack-ui/themed";
export const CATEGORY_ITEMS = [
  {
    data: [
      {
        title: "ShopeeFood Giảm 50%",
        icon: require("../assets/images/meo/meo1.png"),
      },
      {
        title: "Shopee Mall",
        icon: require("../assets/images/meo/meo2.png"),
      },
      {
        title: "Miễn Phí Shop - Có Shopee",
        icon: require("../assets/images/meo/meo3.png"),
      },
      {
        title: "Mã giảm giá",
        icon: require("../assets/images/meo/meo4.png"),
      },
      {
        title: "Khung giờ săn sale",
        icon: require("../assets/images/meo/meo5.png"),
      },
      {
        title: "Shopee live siêu rẻ",
        icon: require("../assets/images/online-shopping.png"),
      },
      {
        title: "Khách hàng thân thiết",
        icon: require("../assets/images/meo/meo1.png"),
      },
      {
        title: "Only Test",
        icon: require("../assets/images/meo/meo2.png"),
      },
    ],
  },
  {
    data: [
      {
        title: "ShopeeFood Giảm 50%",
        icon: require("../assets/images/meo/meo1.png"),
      },
      {
        title: "Shopee Mall",
        icon: require("../assets/images/meo/meo2.png"),
      },
      {
        title: "Miễn Phí Shop - Có Shopee",
        icon: require("../assets/images/meo/meo3.png"),
      },
      {
        title: "Mã giảm giá",
        icon: require("../assets/images/meo/meo4.png"),
      },
      {
        title: "Khung giờ săn sale",
        icon: require("../assets/images/meo/meo5.png"),
      },
      {
        title: "Shopee live siêu rẻ",
        icon: require("../assets/images/online-shopping.png"),
      },
      {
        title: "Khách hàng thân thiết",
        icon: require("../assets/images/meo/meo1.png"),
      },
      {
        title: "Only Test",
        icon: require("../assets/images/meo/meo2.png"),
      },
    ],
  },
];
export const IMAGES_CAROUSEL = [
  {
    image: require("../assets/images/meo/meo1.png"),
  },
  {
    image: require("../assets/images/meo/meo2.png"),
  },
  {
    image: require("../assets/images/meo/meo3.png"),
  },
  {
    image: require("../assets/images/meo/meo4.png"),
  },
  {
    image: require("../assets/images/meo/meo5.png"),
  },
];

export const LIVE_CAROUSEL = [
  {
    value: "Meo 18+",
    image: require("../assets/images/live/meo1.png"),
    live: 5,
  },
  {
    value: "Meo 18+",
    image: require("../assets/images/live/meo2.png"),
    live: 5,
  },
  {
    value: "Meo 18+",
    image: require("../assets/images/live/meo3.png"),
    live: 5,
  },
  {
    value: "Meo 18+",
    image: require("../assets/images/live/meo1.png"),
    live: 5,
  },
  {
    value: "Meo 18+",
    image: require("../assets/images/live/meo2.png"),
    live: 5,
  },
];

export const FLASH_CAROUSEL = [
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/live/meo2.png"),
    percentSale: 30,
    isLike: true,
    isMall: false,
  },
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/product/product2.png"),
    percentSale: 40,
    isLike: false,
    isMall: false,
  },
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/product/product3.png"),
    percentSale: 10,
    isLike: false,
    isMall: false,
  },
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/product/product1.png"),
    percentSale: 80,
    isLike: false,
    isMall: false,
  },
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/product/product2.png"),
    percentSale: 50,
    isLike: false,
    isMall: false,
  },
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/product/product3.png"),
    percentSale: 65,
    isLike: false,
    isMall: false,
  },
];

export const PRODUCT_CAROUSEL = [
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/live/meo2.png"),
    percentSale: 30,
    star: 4.9,
    isLike: true,
    isMall: false,
    sold: 1000,
  },
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/product/product2.png"),
    percentSale: 0,
    star: 5,
    isLike: true,
    isMall: true,
    sold: 2000,
  },
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/product/product3.png"),
    percentSale: 30,
    star: 4.9,
    isLike: false,
    isMall: true,
    sold: 340,
  },
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/product/product1.png"),
    percentSale: 30,
    star: 4.9,
    isLike: true,
    isMall: false,
  },
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/product/product2.png"),
    percentSale: 30,
    isLike: true,
    isMall: false,
  },
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/product/product3.png"),
    percentSale: 65,
  },
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/live/meo2.png"),
    percentSale: 30,
  },
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/product/product2.png"),
    percentSale: 40,
  },
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/product/product3.png"),
    percentSale: 10,
  },
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/product/product1.png"),
    percentSale: 80,
  },
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/product/product2.png"),
    percentSale: 50,
  },
  {
    price: 276000,
    name: "Bịch cơm sườn",
    image: require("../assets/images/product/product3.png"),
    percentSale: 65,
  },
];

export const VIDEO = [
  {
    id: 1,
    channelName: "cutedog",
    uri: "https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4",
    caption: "Cute dog shaking hands #cute #puppy",
    musicName: "Song #1",
    likes: 4321,
    comments: 2841,
    avatarUri: "https://wallpaperaccess.com/full/1669289.jpg",
  },
  {
    id: 2,
    channelName: "meow",
    uri: "https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4",
    caption: "Doggies eating candy #cute #puppy",
    musicName: "Song #2",
    likes: 2411,
    comments: 1222,
    avatarUri: "https://wallpaperaccess.com/thumb/266770.jpg",
  },
  {
    id: 3,
    channelName: "yummy",
    uri: "https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4",
    caption: "Brown little puppy #cute #puppy",
    musicName: "Song #3",
    likes: 3100,
    comments: 801,
    avatarUri: "https://wallpaperaccess.com/thumb/384178.jpg",
  },
];

export const NOTIFICATION_TOP = [
  {
    content: (
      <>
        <MaterialIcons name="local-activity" size={20} color="black" />
        <Text>Gâu gâu</Text>
      </>
    ),
    iconLeft: (
      <Image
        style={[
          {
            width: "100%",
            height: "100%",
          },
        ]}
        source={require("../assets/images/face/haha.png")}
        contentFit="fill"
      />
    ),
    title: "Khuyến Mãi",
  },
  {
    content: <Text>Save Cuối tháng - Săn bể lồn</Text>,
    iconLeft: (
      <Image
        style={[
          {
            width: "100%",
            height: "100%",
          },
        ]}
        source={require("../assets/images/face/haha.png")}
        contentFit="fill"
      />
    ),
    title: "Live & Video",
  },
  {
    content: (
      <>
        <FontAwesome5 name="accessible-icon" size={24} color="black" />
        <Text>Vouncher 18+</Text>
      </>
    ),
    iconLeft: (
      <Image
        style={[
          {
            width: "100%",
            height: "100%",
          },
        ]}
        source={require("../assets/images/face/haha.png")}
        contentFit="fill"
      />
    ),
    title: "Thông tin tài chính",
  },
];


export const NOTIFICATION_BOTTOM = [
  {
    id: 1,
    parent: (
      <Transaction
        isTransaction={true}
        content={
          <Text style={{ color: "gray" }}>Đơn hàng 6969696 đã hoàn thành</Text>
        }
        iconLeft={
          <Image
            style={[
              {
                width: "100%",
                height: "100%",
              },
            ]}
            source={require("../assets/images/meo/meo6.png")}
            contentFit="fill"
          />
        }
        title={"Khuyến Mãi"}
        status={1}
      />
    ),
    child: (
      <>
        <Transaction
          isShowIcon={false}
          isTransaction={true}
          content={
            <Text style={{ color: "gray" }}>
              Đơn hàng 6969696 đã hoàn thành
            </Text>
          }
          iconLeft={<Entypo name="check" size={20} color="green" />}
          title={"Khuyến Mãi"}
        />
        <Divider />
        <Transaction
          isShowIcon={false}
          isTransaction={true}
          content={
            <Text style={{ color: "gray" }}>
              Đơn hàng 6969696 đã hoàn thành
            </Text>
          }
          iconLeft={<FontAwesome name="remove" size={20} color="red" />}
          title={"Khuyến Mãi"}
        />
      </>
    ),
  },
  {
    id: 2,
    parent: (
      <Transaction
      status={2}
        isTransaction={true}
        content={
          <Text style={{ color: "gray" }}>Đơn hàng 6969696 đã hoàn thành</Text>
        }
        iconLeft={
          <Image
            style={[
              {
                width: "100%",
                height: "100%",
              },
            ]}
            source={require("../assets/images/meo/meo6.png")}
            contentFit="fill"
          />
        }
        title={"Khuyến Mãi"}
      />
    ),
    child: (
      <>
        <Transaction
          isShowIcon={false}
          isTransaction={true}
          content={
            <Text style={{ color: "gray" }}>
              Đơn hàng 6969696 đã hoàn thành
            </Text>
          }
          iconLeft={<Entypo name="check" size={24} color="green" />}
          title={"Khuyến Mãi"}
        />
        <Divider />
        <Transaction
          isShowIcon={false}
          isTransaction={true}
          content={
            <Text style={{ color: "gray" }}>
              Đơn hàng 6969696 đã hoàn thành
            </Text>
          }
          iconLeft={<FontAwesome name="remove" size={24} color="red" />}
          title={"Khuyến Mãi"}
        />
      </>
    ),
  },
  {
    id: 3,
    parent: (
      <Transaction
        isTransaction={true}
        content={
          <Text style={{ color: "gray" }}>Đơn hàng 6969696 đã hoàn thành</Text>
        }
        iconLeft={
          <Image
            style={[
              {
                width: "100%",
                height: "100%",
              },
            ]}
            source={require("../assets/images/meo/meo6.png")}
            contentFit="fill"
          />
        }
        title={"Khuyến Mãi"}
      />
    ),
    child: (
      <>
        <Transaction
          isShowIcon={false}
          isTransaction={true}
          content={
            <Text style={{ color: "gray" }}>
              Đơn hàng 6969696 đã hoàn thành
            </Text>
          }
          iconLeft={<Entypo name="check" size={24} color="green" />}
          title={"Khuyến Mãi"}
        />
        <Divider />
        <Transaction
          isShowIcon={false}
          isTransaction={true}
          content={
            <Text style={{ color: "gray" }}>
              Đơn hàng 6969696 đã hoàn thành
            </Text>
          }
          iconLeft={<FontAwesome name="remove" size={24} color="red" />}
          title={"Khuyến Mãi"}
        />
      </>
    ),
  },
  {
    id: 4,
    parent: (
      <Transaction
        isTransaction={true}
        content={
          <Text style={{ color: "gray" }}>Đơn hàng 6969696 đã hoàn thành</Text>
        }
        iconLeft={
          <Image
            style={[
              {
                width: "100%",
                height: "100%",
              },
            ]}
            source={require("../assets/images/meo/meo6.png")}
            contentFit="fill"
          />
        }
        title={"Khuyến Mãi"}
      />
    ),
    child: (
      <>
        <Transaction
          isShowIcon={false}
          isTransaction={true}
          content={
            <Text style={{ color: "gray" }}>
              Đơn hàng 6969696 đã hoàn thành
            </Text>
          }
          iconLeft={<Entypo name="check" size={24} color="green" />}
          title={"Khuyến Mãi"}
        />
        <Divider />
        <Transaction
          isShowIcon={false}
          isTransaction={true}
          content={
            <Text style={{ color: "gray" }}>
              Đơn hàng 6969696 đã hoàn thành
            </Text>
          }
          iconLeft={<FontAwesome name="remove" size={24} color="red" />}
          title={"Khuyến Mãi"}
        />
      </>
    ),
  },
  {
    id: 5,
    parent: (
      <Transaction
        isTransaction={true}
        content={
          <Text style={{ color: "gray" }}>Đơn hàng 6969696 đã hoàn thành</Text>
        }
        iconLeft={
          <Image
            style={[
              {
                width: "100%",
                height: "100%",
              },
            ]}
            source={require("../assets/images/meo/meo6.png")}
            contentFit="fill"
          />
        }
        title={"Khuyến Mãi"}
      />
    ),
    child: (
      <>
        <Transaction
          isShowIcon={false}
          isTransaction={true}
          content={
            <Text style={{ color: "gray" }}>
              Đơn hàng 6969696 đã hoàn thành
            </Text>
          }
          iconLeft={<Entypo name="check" size={24} color="green" />}
          title={"Khuyến Mãi"}
        />
        <Divider />
        <Transaction
          isShowIcon={false}
          isTransaction={true}
          content={
            <Text style={{ color: "gray" }}>
              Đơn hàng 6969696 đã hoàn thành
            </Text>
          }
          iconLeft={<FontAwesome name="remove" size={24} color="red" />}
          title={"Khuyến Mãi"}
        />
      </>
    ),
  },
  {
    id: 6,
    parent: (
      <Transaction
        isTransaction={true}
        content={
          <Text style={{ color: "gray" }}>Đơn hàng 6969696 đã hoàn thành</Text>
        }
        iconLeft={
          <Image
            style={[
              {
                width: "100%",
                height: "100%",
              },
            ]}
            source={require("../assets/images/meo/meo6.png")}
            contentFit="fill"
          />
        }
        title={"Khuyến Mãi"}
      />
    ),
    child: (
      <>
        <Transaction
          isShowIcon={false}
          isTransaction={true}
          content={
            <Text style={{ color: "gray" }}>
              Đơn hàng 6969696 đã hoàn thành
            </Text>
          }
          iconLeft={<Entypo name="check" size={24} color="green" />}
          title={"Khuyến Mãi"}
        />
        <Divider />
        <Transaction
          isShowIcon={false}
          isTransaction={true}
          content={
            <Text style={{ color: "gray" }}>
              Đơn hàng 6969696 đã hoàn thành
            </Text>
          }
          iconLeft={<FontAwesome name="remove" size={24} color="red" />}
          title={"Khuyến Mãi"}
        />
      </>
    ),
  },
];
