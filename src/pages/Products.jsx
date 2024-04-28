import { Card, CardBody, Image } from "@nextui-org/react";
import { default as React } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const list = [
  {
    title: "Tangerine",
    img: "https://replicate.delivery/pbxt/Z7P7AWI4C1qFHxUhycouOWkO86gdDUmxz7UDxMpO6UnsFZnE/out-0.png",
    price: "$3.00",
    count: 0,
  },
  {
    title: "Raspberry",
    img: "https://replicate.delivery/pbxt/pTI7T4afxST7U62POhgFF8kTIg7dWsbB3dZvuUoVf9ZzXkdSA/out-0.png",
    price: "$10.00",
    count: 0,
  },
  {
    title: "Lemon",
    img: "https://replicate.delivery/pbxt/q74fEiYaCM1uaCAoqyaYBCdbzbkMSIqgO1WULRcTAHsfYkdSA/out-0.png",
    price: "$5.30",
    count: 0,
  },
  {
    title: "Avocado",
    img: "https://replicate.delivery/pbxt/a2ZsO8DlZv6zEVfmhggWUGQbVZ0Ey0FsrB4n52JT7ntsMyOJA/out-0.png",
    price: "$15.70",
    count: 0,
  },

  {
    title: "Lemon 2",
    img: "https://replicate.delivery/pbxt/q74fEiYaCM1uaCAoqyaYBCdbzbkMSIqgO1WULRcTAHsfYkdSA/out-0.png",
    price: "$8.00",
    count: 0,
  },
  {
    title: "Banana",
    img: "https://replicate.delivery/pbxt/5hqi1XefULnnzEbOEq737nXYYYpw5nRTQv83uAnwwwZ5ZkdSA/out-0.png",
    price: "$7.50",
    count: 0,
  },
  {
    title: "Orange",
    img: "https://replicate.delivery/pbxt/3eW7ChsWnr3ncyBeCXjJBORF82H1dQekPmTydMtTFQK92I7kA/out-0.png",
    price: "$5.50",
    count: 0,
  },
  {
    title: "Watermelon",
    img: "https://replicate.delivery/pbxt/eysN4FtEyJVrZCMj1M4Fet18TpFzV0NN6Yfy9E4T1HbI1I7kA/out-0.png",
    price: "$12.20",
    count: 0,
  },
];
export default function App() {
  const navigate = useNavigate();
  const Fruits = useSelector((state) => state.fruits);
  console.log("fruits", Fruits);
  return (
    <div className="flex justify-center">
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 max-w-[1000px]">
        {Fruits.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => navigate(`/product/${item.title}`)}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[240px]"
                src={item.img}
              />
            </CardBody>
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
