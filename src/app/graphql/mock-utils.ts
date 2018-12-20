import { MutationUpdaterFn } from "apollo-client"
import { environment } from "src/environments/environment"

export const clientIfMocked = environment.api ? "" : "@client"

export function fnIfLive(fn: MutationUpdaterFn<any>): MutationUpdaterFn<any> {
  return environment.api ? fn : undefined
}
