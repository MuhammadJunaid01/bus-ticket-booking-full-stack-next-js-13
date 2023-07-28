import React from "react";

interface useDestAndOriginProps<T> {
  data: T[];
}

interface useDestAndOriginReturnType {
  origin: string[];
  dest: string[];
}

const useDestAndOrigin = ({
  data,
}: useDestAndOriginProps<string>): useDestAndOriginReturnType => {
  const [origin, setOrigin] = React.useState<string[]>([]);
  const [dest, setDest] = React.useState<string[]>([]);

  React.useEffect(() => {
    const newOriginSet = new Set<string>();
    const newDestSet = new Set<string>();

    data.forEach((item) => {
      const parts = item.split("-");
      newOriginSet.add(parts[0]);
      newDestSet.add(parts[1]);
    });

    setOrigin(Array.from(newOriginSet));
    setDest(Array.from(newDestSet));
  }, [data]); // <-- Only run the effect when "data" changes

  return { origin, dest };
};

export default useDestAndOrigin;
