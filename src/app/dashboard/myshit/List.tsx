"use client";
import { Gear } from "@prisma/client";
import { Card } from "./Card";

type Props = {
  gear: Gear[];
};

const List = ({ gear }: Props) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {gear.map((item) => {
        return (
          <li
            key={item.id}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <Card
              image={item.image}
              name={item.name}
              description={item.description}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
