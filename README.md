#M3U Maker

Just a small piece of code to make my life easier when creating audio/movie playlists
for the VLC. Quite useful for indexing events, lectures, screencasts, podcasts etc. as
well as making their content text searcheable.

An index.txt goes in, a index.m3u comes out.

```
$ m3umkr [path] [separator]
```

Default path is the current directory.
Default separator is the semicolon.

===

The index.txt has the following format:

```
Filename
Chapter name [separator] time
Chapter name [separator] time
Chapter name [separator] time
```

e.g.:

```
Ultimate Fighting Championship 1.mp4
QF: Teila Tuli vs. Gerard Gordeau; 10:51
QF: Kevin Rosier vs. Zane Frazier; 18:12
QF: Royce Gracie vs. Art Jimmerson; 31:25
QF: Ken Shamrock vs. Patrick Smith; 42:11
SF: Gerard Gordeau vs. Kevin Rosier; 53:45
SF: Royce Gracie vs. Ken Shamrock; 1:04:41
FINAL: Royce Gracie vs. Gerard Gordeau; 1:18:48
```

It will spit out a m3u playlist of links the listed scenes.