/*
Errno::ENOENT: No such file or directory @ rb_sysopen - sas

Backtrace:
/usr/local/lib/ruby/gems/2.3.0/gems/sass-3.4.22/lib/sass/plugin/compiler.rb:484:in `read'
/usr/local/lib/ruby/gems/2.3.0/gems/sass-3.4.22/lib/sass/plugin/compiler.rb:484:in `update_stylesheet'
/usr/local/lib/ruby/gems/2.3.0/gems/sass-3.4.22/lib/sass/plugin/compiler.rb:215:in `block in update_stylesheets'
/usr/local/lib/ruby/gems/2.3.0/gems/sass-3.4.22/lib/sass/plugin/compiler.rb:209:in `each'
/usr/local/lib/ruby/gems/2.3.0/gems/sass-3.4.22/lib/sass/plugin/compiler.rb:209:in `update_stylesheets'
/usr/local/lib/ruby/gems/2.3.0/gems/sass-3.4.22/lib/sass/plugin/compiler.rb:294:in `watch'
/usr/local/lib/ruby/gems/2.3.0/gems/sass-3.4.22/lib/sass/plugin.rb:109:in `method_missing'
/usr/local/lib/ruby/gems/2.3.0/gems/sass-3.4.22/lib/sass/exec/sass_scss.rb:360:in `watch_or_update'
/usr/local/lib/ruby/gems/2.3.0/gems/sass-3.4.22/lib/sass/exec/sass_scss.rb:51:in `process_result'
/usr/local/lib/ruby/gems/2.3.0/gems/sass-3.4.22/lib/sass/exec/base.rb:52:in `parse'
/usr/local/lib/ruby/gems/2.3.0/gems/sass-3.4.22/lib/sass/exec/base.rb:19:in `parse!'
/usr/local/lib/ruby/gems/2.3.0/gems/sass-3.4.22/bin/sass:13:in `<top (required)>'
/usr/local/bin/sass:23:in `load'
/usr/local/bin/sass:23:in `<main>'
*/
body:before {
  white-space: pre;
  font-family: monospace;
  content: "Errno::ENOENT: No such file or directory @ rb_sysopen - sas"; }
