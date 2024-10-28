import { GlobalStoreOverview } from "@/components/overview/GlobalStoreOverview";
import { InitStoreSubscriber } from "@/components/storeSubscriber/StoreWithInitAndSubscriber";
import { ParentWithStorageInitializers } from "@/components/ParentWithStorageInitializers";
import { SimpleStore } from "@/components/storeEditor/SimpleStore";
import { SimpleStoreSubscriber } from "@/components/storeSubscriber/SimpleStoreSubscriber";
import { StoreWithInit } from "@/components/storeEditor/StoreWithInit";
import { State } from "@/components/storeEditor/State";

export default function Home() {
  return (
    <ParentWithStorageInitializers>
      <main
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontWeight: "bold " }}>Zustand StateManager example:</h1>
        <State />
        <GlobalStoreOverview />
        <SimpleStore />
        <StoreWithInit />
        <SimpleStoreSubscriber />
        <InitStoreSubscriber />
      </main>
    </ParentWithStorageInitializers>
  );
}
