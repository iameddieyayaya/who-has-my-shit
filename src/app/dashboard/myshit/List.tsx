"use client";
import { Gear } from "@prisma/client";

type Props = {
  gear: Gear[];
};

const List = ({ gear }: Props) => {
  return gear.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </div>
    );
  });
};

export default List;
