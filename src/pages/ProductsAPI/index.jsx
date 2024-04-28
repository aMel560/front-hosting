import { Card, CardBody, Button, Image } from "@nextui-org/react";
import { Trash } from "lucide-react";
import { default as React } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useDeleteFruitsMutation,
  useGetFruitsQuery,
} from "../../App/slices/ApiSlice";

export default function ProductApi() {
  const navigate = useNavigate();
  const { data: Fruits, refetch } = useGetFruitsQuery();
  // console.log("fruits", Fruits);

  const [deleteFruit] = useDeleteFruitsMutation();
  const handleclick = async (id) => {
    const res = await deleteFruit(id);
    console.log("res", res);
    refetch();
  };

  return (
    <div className="flex justify-center">
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 max-w-[1000px]">
        {Fruits?.map((item, index) => (
          <Card
            className="!z-0 group"
            shadow="sm"
            key={index}
            isPressable
            onPress={() => navigate(`/product/${item._id}`)}
          >
            <CardBody className="overflow-visible p-0">
              <Button
                color="primary"
                variant=""
                className=" rounded-md  absolute right-0 top-0 z-20 hidden group-hover:flex justify-center items-center bg-white/70"
                onClick={() => handleclick(item._id)}
              >
                <Trash color="red" />
              </Button>

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
            <div>{item.agriculteur?.nom}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
