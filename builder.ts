import babelCore from "https://dev.jspm.io/npm:@babel/standalone";
import babelPluginProposalClassProperties from "https://dev.jspm.io/npm:@babel/plugin-proposal-class-properties";
import babelPluginProposalOptionalChaining from "https://dev.jspm.io/npm:@babel/plugin-proposal-optional-chaining";
import { join } from "https://deno.land/std@0.83.0/path/mod.ts";

const p = Deno.run({
  cmd: ["deno", "bundle", "./src/browser.ts"],
  stdout: "piped",
  stderr: "piped",
});

  const source = await p.output();
  const { transform } = babelCore as any;
  const { code } = transform(
    new TextDecoder().decode(source),
    {
      filename: join(Deno.cwd() ,'./dist/clients/dropper.js'),
      presets: ["env"],
      plugins: [
        babelPluginProposalClassProperties,
        babelPluginProposalOptionalChaining,
      ],
    },
  );
  const encoded = new TextEncoder().encode(code);
  
  await Deno.writeFile(join(Deno.cwd() ,'./dist/clients/dropper.js'), encoded)

  console.log('Done!')
