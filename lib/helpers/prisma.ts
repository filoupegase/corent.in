import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";

// https://www.prisma.io/blog/serverless-database-drivers-KML1ehXORxZV#use-neon-with-neondatabaseserverless
neonConfig.webSocketConstructor = ws;
