/*
  This is the manager driver. Part of our requirements are that we
  share storage with another department, so we must make sure we don't go over our share.
  If we exceed our share of storage on the NAS, then the other department's Windows servers
  shut down. The manager manages our part of the storage, and makes sure usage doesn't
  get too high. The point is to make sure storage isn't ever exceeded during a time
  when no one is available to fix the issue.
*/


// TODO: Delete oldest backup
// TODO: Detect storage space left, act accordingly
export const manageDriver = () => {
  
}
