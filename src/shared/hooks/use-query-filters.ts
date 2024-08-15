import React from "react";
import { Filters } from "@/shared/hooks/use-filters";
import { useHash } from "@/shared/hooks/use-hash.ts";
import qs from "qs";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
  const isMounted = React.useRef(false);
  const hash = useHash();
  const router = useRouter();

  React.useEffect(() => {
    if (isMounted.current) {
      const params = {
        ...filters.prices,
        pizzaTypes: Array.from(filters.pizzaTypes),
        sizes: Array.from(filters.sizes),
        ingredients: Array.from(filters.selectedIngredients),
      };

      const query = qs.stringify(params, {
        arrayFormat: "comma",
      });

      router.push(`?query=${query}`, {
        scroll: false,
      });
    }

    isMounted.current = true;
  }, [filters, router]);
};
