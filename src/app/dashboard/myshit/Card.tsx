import Button from "@/components/ui/Button";
import { Gear } from "@prisma/client";
import Image from "next/image";

export const Card = ({ image, name, description }: Partial<Gear>) => {
  return (
    <div className="bg-white m-4">
      <div className="flex flex-1 flex-col">
        {image && (
          <Image
            className="mx-auto object-scale-down w-48 h-48"
            src={image}
            alt={name as string}
            width={256}
            height={256}
          />
        )}
        <h3 className="mt-6 text-sm font-medium text-gray-900">{name}</h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-sm text-gray-500">{description}</dd>
        </dl>
        <div className="flex justify-around pt-4">
          <Button kind="warning" onClick={() => {}}>
            Delete
          </Button>
          <Button kind="primary" onClick={() => {}}>
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};
