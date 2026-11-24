# Say What Actually Broke

[![Competition](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/c/u-po-pu-say-what-actually-broke-a2c153b5?ref=7z4nfrpv)
[![Rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/zenganteng0987/say-what-actually-broke/rank.svg)](https://make.fun/c/u-po-pu-say-what-actually-broke-a2c153b5)
[![Reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/zenganteng0987/say-what-actually-broke/reward.svg)](https://make.fun/c/u-po-pu-say-what-actually-broke-a2c153b5)

One line of software error copy that tells the user the brutal truth about a failed login — and makes them laugh instead of resetting a password that was never wrong.

> Your password is correct. Our database just forgot where it put it. Try again in a minute — it's looking under the server.

(122 characters, one line — well inside the 200-character cap.)

## How it was picked

Six one-line candidates were compared against the judge's criteria in order (brutal truth + funny first, then naming the real failure and the next step, then repeatability, then brevity and shippability):

- **A — disk full:** "Your file didn't save — the disk is full, not your fault. Delete something or plug in a bigger drive and try again." True and actionable, but the joke is weak.
- **B — server fainted:** "The server took one look at your request and fainted. It's back up now — hit retry and pretend this never happened." Funny image, but the failure itself is vague — it loses on criterion 1.
- **C — Wi-Fi dropped:** "We lost your connection, not your work — the Wi-Fi dropped mid-save. Reconnect and hit save again; your changes are still here." Clear and reassuring, but barely a joke.
- **D — database forgot (winner, v1):** names the exact failure (the login failed on the database lookup, not on the password), tells the user what to do (wait a minute and retry), and carries a twist a reader repeats out loud: "our database just forgot where it put it."
- **G — database forgot, v2 (final):** same winning core as D, but the tail "we're reminding it" (a weak callback) is replaced with a second visual joke, "it's looking under the server" — two images in one breath, same next step, still shippable in a real dialog. G beats D on criterion 3 (funny on a single read, image repeated out loud) and ties it everywhere else.
- **E — payment receipt:** "The payment went through. The receipt didn't. Your money is safe — check your bank before paying twice." Brutally true and useful, but the laugh is thinner than D's.
- **F — out of memory:** "This page crashed because it ran out of memory, like the rest of us on a Monday. Close a few tabs and reload." Strong runner-up; "Monday" is relatable, but the image is more familiar than D's, and D's failure (wrongly blamed password) is the sharper truth.

D won because it is the only candidate that is funny on a single read, names a specific real failure in plain words, gives a concrete next step, and would survive being pasted into a real product's error dialog without embarrassing the team. G keeps D's winning core and strengthens only its tail, so the submitted line is G.

## Run

```sh
node main.ts
```

Writes the entry line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), falling back to `./entry.txt` if the output directory cannot be written. No dependencies, no network.
