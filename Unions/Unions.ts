type PaymentType = "cash" | "credit" | "debit";
type Element = number | string;
type SeatAllotment = "aisle" | "middle" | "window";

const seatAllotment = (seat: SeatAllotment, paymentType: PaymentType): void => {
  if (paymentType === "cash") {
    console.log(`Seat allotted: ${seat} (Payment type: Cash)`);
  } else if (paymentType === "credit") {
    console.log(`Seat allotted: ${seat} (Payment type: Credit)`);
  } else if (paymentType === "debit") {
    console.log(`Seat allotted: ${seat} (Payment type: Debit)`);
  } else {
    console.log("Invalid payment type");
  }
};

const processArray = (arr: Element[]): void => {
  console.log("Array elements:");
  for (const element of arr) {
    console.log(element);
  }
};

// Example usages
const elements: Element[] = [1, "two", 3, "four", 5];
const paymentType: PaymentType = "credit";

processArray(elements);
seatAllotment("aisle", paymentType);

export {};