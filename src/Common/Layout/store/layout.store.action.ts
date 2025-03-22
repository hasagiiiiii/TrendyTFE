import { createAction } from "@reduxjs/toolkit"

const StoreKey = "Layout"

export const Test = createAction<string>(`Test${StoreKey}`)