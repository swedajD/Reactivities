import { format, type DateArg } from "date-fns";

export function formatDate(Date: DateArg<Date>) {
    return format(Date, "dd MMM yyyy h:mm a")
}