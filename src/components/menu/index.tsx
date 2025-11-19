import MenuItem from "./MenuItem";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Menu({ items }: { items: any }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {items.map((item: any) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
