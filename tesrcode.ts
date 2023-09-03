const getSingleCategory = async () => {
    const res = await fetch(
      `${BaseURl}api/category/singlecategory?${params.category}`
    );
    // console.log(res.json());

    return await res.json();
  };