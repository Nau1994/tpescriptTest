type submitRequest = {
  consent: {
    uni: string;
    indemt: boolean;
    previous: {
      first: string;
      last: string;
    }[];
  };
  payment: {
    creditToken: string;
  };
};

function getPayment(): submitRequest["payment"] {
  return {
    creditToken: "12hgnfm45",
  };
}

type submitRequestcredittoken=submitRequest["payment"];
type submitRequestConsentPrevius=submitRequest["consent"]["previous"][0];

console.log(getPayment());
