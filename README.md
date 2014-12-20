# Open Smart Environment LIRC package

This package allows to use LIRC in OSE. It is thus possible to
manage your environment using IR remote controllers.

It forwards received commands to the [control.remote](http://opensmartenvironment.github.io/doc/modules/control.remote.html) component.

## Status
- Pre-alpha stage (insecure and buggy)
- Unstable API
- Gaps in the documentation
- No test suite

This is not yet a piece of download-and-use software. Its important
to understand the basic principles covered by the
[documentation](http://opensmartenvironment.github.io/doc/).

Use of this software is currently recommended only for users that
wish participate in the development process, see
[Contributions](#contributions).

## Getting started
To get started with OSE, refer to the [ose-bundle](http://opensmartenvironment.github.io/doc/modules/bundle.html) package and
[Media player example application](http://opensmartenvironment.github.io/doc/modules/bundle.media.html). You can read the entire OSE
documentation [here]( http://opensmartenvironment.github.io/doc).

## Command names pre-processing

Received LIRC command names are pre-processed by removing
"KEY_" and "BTN_" and converting the rest of the command names to
lowercase.

It also suppresses double presses of the same button within 150 ms.

## Modules
Open Smart Environment LIRC package consists of the following modules:
- LIRC kind
- OSE LIRC core
- OSE LIRC content

### LIRC kind
Entry kind for connecting to and communicating with the LIRC
daemon.

Receives and processes LIRC commands from the LIRC Unix socket
(/var/run/lirc/lircd). Emits the "receive" event, which can then
be, for example, handled by the [control.remote](http://opensmartenvironment.github.io/doc/modules/control.remote.html) component.

Module [LIRC kind](http://opensmartenvironment.github.io/doc/classes/lirc.lib.lirc.html) reference ... 

### OSE LIRC core
Core singleton of ose-lirc npm package. Register [entry kinds](http://opensmartenvironment.github.io/doc/classes/ose.lib.kind.html)
defined by this package to the `"control"` [scope](http://opensmartenvironment.github.io/doc/classes/ose.lib.scope.html).

Module [OSE LIRC core](http://opensmartenvironment.github.io/doc/classes/lirc.lib.html) reference ... 

### OSE LIRC content
Provides files of OSE LIRC package to the browser.

Module [OSE LIRC content](http://opensmartenvironment.github.io/doc/classes/lirc.content.html) reference ... 

## <a name="contributions"></a>Contributions
To get started contributing or coding, it is good to read about the
two main npm packages [ose](http://opensmartenvironment.github.io/doc/modules/ose.html) and [ose-bb](http://opensmartenvironment.github.io/doc/modules/bb.html).

This software is in the pre-alpha stage. At the moment, it is
premature to file bugs. Input is, however, much welcome in the form
of ideas, comments and general suggestions.  Feel free to contact
us via
[github.com/opensmartenvironment](https://github.com/opensmartenvironment).

## Licence
This software is released under the terms of the [GNU General
Public License v3.0](http://www.gnu.org/copyleft/gpl.html) or
later.
