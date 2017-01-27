'option strict';

const vscode = require('vscode');

exports.getConstants = function getConstants() {
    return {
        armTemplatesPath: 'arm-templates',
        btnRegionSelectionLabel: 'Select your desired Azure region. ',
        btnStorageSelectionLabel: 'Select your desired Azure Storage Account. ',
        statusGettingSubscriptions: 'Logging into Azure and getting your list of subscriptions...',
        statusGettingRGs: 'Getting your list of resource groups...',
        statusGettingFarms: 'Geting your list of server farms...',
        statusGettingResources: 'Getting your list of resources',
        statusLoggedInAndSubscriptionSelected: 'Logged into Azure and subscription "{0}" selected. Use "azure subscription list" to change subscription.',
        statusCreatingResourceGroup: 'Creating resource group "{0}"',
        statusCreatedResourceGroup: 'Resource group "{0}" created successfully',
        statusCreatingKeyVault: 'Creating key vault "{0}"',
        statusCreatedKeyVault: 'Key vault "{0}" created successfully',
        statusCreatingBatchAccount: 'Creating batch account {0}',
        statusCreatedBatchAccount: 'Batch account {0} created successfully',
        statusCreatingServerFarm: 'Creating server farm {0}',
        statusCreatedServerFarm: 'Created server farm {0}',
        statusRegionSelected: '{0} region selected',
        statusResourceGroupSelected: '{0} resource group selected',
        statusStorageAccountSelected: '{0} storage account selected',
        statusCreatingStorageAccount: 'Creating storage account "{0}"',
        statusCreatedStorageAccount: 'Storage account "{0}" created successfully',
        promptGallerySearch: 'Gallery name filter:',
        promptNewWebAppName: 'Web App Name',
        promptNewRgName: 'New Resource Group Name:',
        promptNewBatchAccount: 'New Batch Account Name:',
        promptWebSiteNameNotAvailable: 'That web app name is not available.',
        promptStorageAccountNameNotAvailable: 'That storage account name is not available.',
        promptBatchAccountNameNotAvailable: 'The batch account name is not available.',
        promptNewServerFarm: 'Server Farm Name',
        promptWebAppCreationInProcess: 'Creating Web App "{0}"...',
        promptWebAppCreated: 'Created Web App "{0}". Use "azure browse resource in portal" to open it up in the Azure portal.',
        promptWebAppCreationFailed: 'Failed to create web app. Reason: {0}',
        promptKeyVaultCreationFailed: 'Failed to create key vault. Reason: {0}',
        promptFunctionAppCreationInProcess: 'Creating Function App "{0}"...',
        promptFunctionAppCreated: 'Created Function App "{0}". Use "azure browse resource in portal" to open it up in the Azure portal.',
        promptFunctionAppCreationFailed: 'Failed to create Function App. Reason: {0}',
        promptNoFarmInResourceGroup: 'The resource group you selected doesn\'t have any server farms.',
        promptNoWorkspaceOpen: 'You do not have a directory open so there is no workspace.',
        promptSelectDownloadedTemplate: 'Select the template from those in your workspace',
        promptDeployingTemplate: 'Deploying template {0} to resource group {1}',
        promptDeployingTemplateCompleted: 'Template {0} deployment to resource group {1} completed with status of {2}',
        promptDeployingTemplateFailed: 'FAILED to deploy template {0} to resource group {1}',
        promptNotLoggedIn : 'You have not yet logged in. Run the Azure Login command first.',
        promptTemplateExported: 'Resource group {0} has been exported to your workspace\'s arm-templates folder',
        promptTemplateExportedWithErrors: 'Resource group {0} has been exported with errors. Check the template for completeness.',
        btnLabelNewRg: 'New',
        btnLabelExistingRg: 'Existing',
        optionNewRg: 'Create new resource group',
        optionExistingRg: 'Use existing resource group',
        optionNewHostingPlan: 'Create a new server farm',
        optionUseExistingHostingPlan: 'Use an existing server farm',
        selectedTemplateName: null
    };
};

exports.getTenantId = function getTenantId() {
    var f = vscode.workspace.getConfiguration('azure');
    if (f != null) {
        if (f.tenantId != null)
            return f.tenantId;
    }
    return null;
};