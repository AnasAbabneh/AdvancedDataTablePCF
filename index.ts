import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DataTable } from "./components/DataTable/DataTable";

export class AdvancedDataTable implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private container: HTMLDivElement;

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
        this.container = container;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        ReactDOM.render(
            React.createElement(DataTable, { dataset: context.parameters.dataset }),
            this.container
        );
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        ReactDOM.unmountComponentAtNode(this.container);
    }
}
