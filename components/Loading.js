import { Circle } from "better-react-spinkit";

function Loading() {
    return (
        <center style={{ display: "grid", placeItems: "center", height: "100vh" }} >
            <div>
                <img src="https://lh3.googleusercontent.com/proxy/GTnKVUBChpBJ7rKqtCYxf-e9vJusbdgg42B011A6KWtjp2zBwQGfBDkd2FzL5PfkyJYfsxvt__EtbaxRXkXZcODjCzTslylFpOVBnVvC8Jl4n_gEDBo" alt="" style={{ marginBottom: 10 }} height={200} />

                <Circle color="#3CBC28" size={80} />

            </div>
        </center>
            
    )
}

export default Loading
