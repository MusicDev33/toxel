### Config File
To make this easier to use from a SysAdmin perspective, I've decided to make this application work
by using a .conf file in the root. The format is as follows:

`crontab:source:archivelocation:archivename`

`crontab` is just the cron rule you're using, such as `0 7 * * *`, which would back up
a directory every day at 7 AM.

`source` is the directory you want to back up.

`archivelocation` is the directory in which you want to store the archive.

`archivename` is the name you want to give to the archive. This is optional, and if you leave this off,
then toxel will automatically give the archive a name.
